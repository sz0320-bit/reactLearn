

const NavDefault = ({title, message}) => {

    const alertMsg = () => {
        alert(message);
    }

    return (
        <div className="nav-default">
            <input type={'button'} value={title} onClick={alertMsg}/>
        </div>
    )
}


export {NavDefault};