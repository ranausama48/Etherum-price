import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class BlogDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: ""
        }
    }
    componentDidMount() {
        this.getBlog()
    }
    componentDidUpdate(prevprops){
      prevprops.match.params.fid= (!prevprops.match.params.fid)?"":prevprops.match.params.fid;
      prevprops.match.params.sid= (!prevprops.match.params.sid)?"":prevprops.match.params.sid;
        if(prevprops.blogs!=this.props.blogs||prevprops.match.params.fid!=this.props.match.params.fid||
            prevprops.match.params.sid!=this.props.match.params.sid
            )
        this.getBlog();
    }
    getBlog=()=>{
        if (this.props.match.params.fid && this.props.match.params.sid) {
            if (this.props.blogs.length>0){
                var link=this.props.match.params.fid+"/"+this.props.match.params.sid;
               var blog= this.props.blogs.find(blog => {
                    return blog.title.link==link;
                })
                if(blog)
                {
                var url={url:blog.title.fulllink};
            fetch("http://localhost:5000/blogDetail", {
                method: "POST",
                body: JSON.stringify(url),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(res => res.json())
                .then(res => {
                    if (res.success) {

                        // alert("done")
                        this.setState({
                            blog: res.article
                        })
                    }
                })
                .catch(err => console.log(err));
        }}}
    }
    render() {
        const { blog } = this.state;
        return (
            <div style={{
                boxSizing: "border-box",
                // background: "#fff",
                fontFamily: "montserrat"
            }}>
                <nav
                    className="navbar navbar-expand-sm fixed-top navbar-da"
                    style={{ backgroundColor: "#555" }}
                >
                    <div className="container">
                        <h4>
                            <Link
                                to="/"
                                className="text-light nav-link "
                                style={{ fontWeight: "700", fontSize: "24px" }}
                            >
                                ethereumprice
              </Link>
                        </h4>
                        <button
                            className="navbar-toggler float-right"
                            style={{ color: "red" }}
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon text-white btn btn-primary bg-white" />
                        </button>
                        <ul className="navbar-nav ml-auto d-inline">
                            <li className="nav-item d-inline">
                                <button className="btn btn-light ml-2">BUY ETHEREUM</button>
                            </li>
                        </ul>

                    </div>
                </nav>
<div className="article-content">

                <div dangerouslySetInnerHTML={{ __html: blog }} style={{ marginTop: "60px" }}>
</div>

                </div>
                {/* {blog} */}
            </div>

        );
    }
}
const mapStateToProps = (store) => {
    return {
        blogs: store.blogs
    }
}
export default connect(mapStateToProps)(BlogDetails);