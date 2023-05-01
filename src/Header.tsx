import "/src/main.css";
import "/src/header.css";

function Header() {
    return (
        <>
			<ul id="nav">
				<li>
					<a href="#domov">DOMOV</a>
				</li>
				<li>
					<a href="#omne">O MNE</a>
				</li>
				<li>
					<a href="#projekty">PROJEKTY</a>
				</li>
				<li>
					<a href="#kontakt">KONTAKT</a>
				</li>
			</ul>
        </>
    );
}

export default Header;
