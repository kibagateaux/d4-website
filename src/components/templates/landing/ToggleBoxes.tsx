const ToggleBoxSelected = ({
  bgColor,
  children,
  textColor,
}: {
  bgColor: string;
  children: string;
  textColor: string;
}) => (
  <div
    className="flex flex-col"
    style={{ width: `${(children.length + 5) * 15}px` }}
  >
    <div className={`text-right ${bgColor} ${textColor} text-3xl px-2 py-1`}>
      {children}
    </div>
  </div>
);

interface ToggleBoxesProps {
  bgColor: string;
  onClick: (index: number) => void;
  selected: number;
  text: string[];
  textColor: string;
}

const ToggleBoxes = ({
  bgColor,
  onClick,
  selected,
  text,
  textColor,
}: ToggleBoxesProps) => {
  return (
    <div className="flex flex-col space-y-6">
      {text.map((t, index) => (
        <div key={index}>
          {index === selected ? (
            <ToggleBoxSelected bgColor={bgColor} textColor={textColor}>
              {t}
            </ToggleBoxSelected>
          ) : (
            <div
              className={`h-6 ${bgColor} hover:opacity-80 cursor-pointer`}
              style={{ width: `${(t.length + 5) * 15}px` }}
              onClick={() => onClick(index)}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ToggleBoxes;
