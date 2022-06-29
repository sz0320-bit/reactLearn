import {NavDefault} from './navButtons'

const MainHead = () => {
    return (
        <div className={'mainHeader'}>
            <div className={'mainHeader-title'}>
                <h1>React Learn</h1>
            </div>
            <div className={'buttonHolder'}>
                <NavDefault title={'HomePage'} message={'homepage'}/>
                <NavDefault title={'About'} message={'about'}/>
                <NavDefault title={'Contact'} message={'contact'}/>
            </div>
        </div>
    )
}

export {MainHead};