

export default function Navbar(props) {


    return (

        <ul>
            {props.links.map((link) => (
                <li key={link.id}>
                    <a href={link.url}>{link.text}</a>
                </li>
            ))}
        </ul>

    );

}