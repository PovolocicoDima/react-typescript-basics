import { FC, useRef, useState } from "react";

const EventExamples: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = () => {
    console.log(inputRef.current?.value);
  };

  const dragHandler = () => {
    console.log("Drag started");
  };

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("DROP");
  };

  return (
    <div>
      <input
        type="text"
        onChange={changeHandler}
        value={value}
        placeholder="controlled"
      />
      <input type="text" ref={inputRef} placeholder="UNcontrolled" />
      <button onClick={clickHandler}>Press me</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: 200, height: 200, background: "red", marginTop: 15 }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? "blue" : "red",
          marginTop: 15,
        }}
      ></div>
    </div>
  );
};

export default EventExamples;
