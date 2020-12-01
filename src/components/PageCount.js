import React, { Component } from "react";
class PageCount extends Component {
// export const PageCount = () => {
    // const [pageCount, setPageCount] = useState(10); 
    // useEffect (() => {
    //     console.log("Value", pageCount)
    //     // export const pageCounter = pageCount;
    // // handleChange(setPageCount(10))
    // //    onClickHandler(event) {
    // //         const value = event.target.innerHTML;
    // //         setPageCount(value)
    // //         // this.setState({ value })
    // //     }
    // }, [pageCount]);
    render() {
        const {pageCount,onClickSetPage} = this.props;
        return(
            <>
                {/* <button onClick={() => onClickSetPage(2)}>Sagar</button> */}
                <select className="form-control col-md-4">
                    <option >5</option>
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                    <option>25</option>
                </select>
            </>
        )
    }
}
export default PageCount;