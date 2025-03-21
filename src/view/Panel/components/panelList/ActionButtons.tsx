import MarkAllDone from "./components/actionButtons/MarkAllDone";
import RemoveCheck from "./components/actionButtons/RemoveCheck";

const ActionButtons = () => {
  return (
    <div className="action-buttons">
      <MarkAllDone />
      <RemoveCheck />
    </div>
  );
};

export default ActionButtons;
