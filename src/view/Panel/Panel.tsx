import PanelInput from "./PanelInput";
import PanelList from "./PanelList";

const Panel = () => {
  return (
    <div className="panel">
      <div className="panel-main">
        <PanelInput />
        <PanelList />
      </div>
    </div>
  );
};

export default Panel;
