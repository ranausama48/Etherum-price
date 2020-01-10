import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    }
  }
  render() {
    const { blogs } = this.props;
    // console.log("redux state",this.props.blogs);
    // alert(blogs.length)
      // console.log(blogs)
    return (
      <div className="article-list">
        <h2 className="article-list__title">Ethereum Price Updates</h2>
        <div className="article-list__cards">
          {blogs.length>0&&
            blogs.map(blog => {
              const { title, link } = blog.title;
              const { image, name, date } = blog.author;
              const { article, articleImage } = blog;
              return (
                <article className="article-card" id="post-123" key={title}>
                  <div className="article-card__article">
                    <div className="article-card__body">

                      <h2><Link to={link}>{title}</Link></h2>
                      <div className="article-card__meta flex--acenter">
                        <div className="author-avatar">
                          <img src={image} alt="Nick" />
                        </div>
                        <div className="author-name">
                          <div className="meta-label">Author</div>
                          {name} </div>
                        <div className="meta-posted">
                          <span className="mega-hero__label">Published</span>
              <span className="meta__posted-on"><Link to={link} rel="bookmark"><time className="entry-date published updated" >{/*datetime="2019-08-19T18:31:39+01:00"*/ }
                            <br />{date}</time></Link></span> </div>

                      </div>
                      <div className="article-content">
                        <p dangerouslySetInnerHTML={{ __html: article }}></p>
                        {/* {article} */}
                        ... <Link to={link} className="read-more">Read article</Link>
                      </div>
                    </div>
                    <div className="article-card__image">
                      <img src={articleImage} alt="Featured IMG: Bizarre Bitcoin Conf, ETH Tops Developer Rankings &amp; Binance To Lauch Libra Competitor" />
                    </div>
                  </div>
                </article>
              )
            })
          }

        </div>
        {/* <h1 style = {{ color:'black', textAlign:'left', fontSize:'32px'}}> What is Ethereum</h1><br />
        <p style={{ color: "black", fontFamily: " montserrat,sans-serif", textAlign: 'left' }}>
          Ethereum was first conceived in 2013 by its founder, Vitalik Buterin.
          The Ethereum whitepaper described the blockchain as an evolution of
          Bitcoin’s, enabling not only payments but “smart contracts” too.
        </p><br />

        <p style={{ color: "black", fontFamily: " montserrat,sans-serif", textAlign:'left'}}>
          Using Ethereum’s “Turing complete” smart contract language, Solidity,
          developers are able to deploy a set of instructions to the blockchain
          that operate indefinitely with a high degree of finality and
          fraud-resistance. With the first block being mined in July 2015,
          Ethereum has since become the largest smart contract platform of its
          kind, and the second largest blockchain of all time as measured by
          market capitalization.
        </p>

        <a href="#" className="" data-toggle="collapse" data-target="#blog">
          Read more
        </a>
        <div id="blog" className="collapse">
          <p style={{ color: "black", fontFamily: " montserrat,sans-serif" }}>
            The rapid price increase of Ethereum has not only attracted
            investors but developers too. Ethereum has tens of thousands of
            developers in its open source community, each contributing to the
            many layers of the “Ethereum stack”. This includes code
            contributions to the core Ethereum clients, second layer scaling
            tech and the “decentralized applications” (dApps) that are built on
            top of the platform. The appeal of Ethereum to developers is unique
            in that it was the first platform to allow anyone in the world to
            write and deploy code that would run without the risk of censorship.
            The community of developers which have formed around these core
            principles have led to the creation of technologies that could not
            have existed without the inception of Ethereum, many of which were
            never predicted. Some of the major use-cases of Ethereum so far have
            been:
          </p>
        </div> */}
      </div>
    );
  }
}
const mapStateToProps=(store)=>{
  return{
    blogs:store.blogs
  }
}
export default connect(mapStateToProps)(Blog);
