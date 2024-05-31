

export const Toggle = ({ handleChange, isChecked }) => {
    localStorage.setItem('isDark', isChecked);
    return (
        <div className="form-check form-switch toggle-container">
            <input className="toggle form-check-input" type="checkbox" id="check" onChange={handleChange} checked={isChecked} />
            {/* <label className="form-check-label nav-link" htmlFor="check">DM</label> */}
        </div>
    );
}