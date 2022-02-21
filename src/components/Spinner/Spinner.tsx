import "./Spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container" >
      <span className="loading-spinner" data-testid="spinner"> 
      </span>
    </div>
  );
}