import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

export const Page1 = () => {
    return (
        <div>
            <h1>Page1</h1>
            <br />
            <Link to="/page1/detaila">DetailA</Link>
            <br />
            <Link to="/page1/detailb">DetailB</Link>
        </div>
    )
}