import { useState } from "react";

function AgrandarImagen({ src, alt, className }) {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleWheel = (e) => {
    e.preventDefault();
    const zoomStep = 0.1;
    if (e.deltaY < 0) setZoom((z) => Math.min(z + zoomStep, 3));
    else setZoom((z) => Math.max(z - zoomStep, 1));       
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setDragging(true);
    setStartPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setOffset({
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <>
      <img
        className={className}
        src={src}
        alt={alt}
        onClick={() => {
          setOpen(true);
          setZoom(1);
          setOffset({ x: 0, y: 0 });
        }}
      />

      {open && (
        <div
          className="overlay"
          onClick={() => setOpen(false)}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <img
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            style={{
              transform: `scale(${zoom}) translate(${offset.x / zoom}px, ${offset.y / zoom}px)`,
              cursor: dragging ? "grabbing" : "grab",
            }}
          />
        </div>
      )}
    </>
  );
}

export default AgrandarImagen;