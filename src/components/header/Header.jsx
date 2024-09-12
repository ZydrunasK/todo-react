import logo from '../../assets/logo.png'
import './Header.css';
import './Button.css';

export function Header () {
    return (
        <header className="main-header">
        <img className="logo" src={ logo } alt="Logo" />
        <div className="stats">
            <div className="detail">
                <span className="label">Viso:</span>
                <span className="value">0</span>
            </div>
            <div className="detail">
                <span className="label">Todo:</span>
                <span className="value">0</span>
            </div>
            <div className="detail">
                <span className="label">In-progress:</span>
                <span className="value">0</span>
            </div>
            <div className="detail">
                <span className="label">Done:</span>
                <span className="value">0</span>
            </div>
            <div className="detail">
                <span className="label">Deleted:</span>
                <span className="value">0</span>
            </div>
        </div>
    </header>
    )
}