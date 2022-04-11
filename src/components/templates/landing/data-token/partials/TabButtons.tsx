interface TabButtonsProps {
  items: TabButtonItem[];
  onClick: (index: number) => void;
}

interface TabButtonItem {
  name: string;
  selected: boolean;
}

interface TabButtonItemProps {
  item: TabButtonItem;
  onClick: () => void;
}

const TabButtonItemUI = ({ item, ...props }: TabButtonItemProps) => (
  <div
    className={`px-4 py-1 cursor-pointer hover:opacity-70 leading-6 text-center ${
      item.selected
        ? "bg-theme-base-content text-theme-base-100 font-alt-bold text-xl"
        : "text-theme-base-content font-alt text-lg"
    }`}
    {...props}
  >
    {item.name}
  </div>
);

const TabButtonsUI = ({ items, onClick }: TabButtonsProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around w-full overflow-x-auto space-y-2 md:space-y-0">
      {(items || []).map((item, index) => (
        <TabButtonItemUI
          key={index}
          item={item}
          onClick={() => {
            onClick(index);
          }}
        />
      ))}
    </div>
  );
};

export default TabButtonsUI;
