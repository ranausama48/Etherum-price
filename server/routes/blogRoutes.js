const express = require("express");
const blogs = express.Router();
const cheerio = require("cheerio");
const axios = require("axios");
const url = "https://ethereumprice.org/";
var obj = {
    title: {
        fulllink: null,
        link: null,
        title: null
    },
    author: {
        image: null,
        name: null,
        date: null
    },
    article: null,
    articleImage: null
};
blogs.get("/getBlogs", (req, res) => {
    axios(url)
        .then(responce => {
            const html = responce.data;
            var data = [];
            const $ = cheerio.load(html)
            $(".article-card__article").each((i, el) => {
                try {

                    obj.title.fulllink = `${$(".article-card__body h2 a")[i].attribs.href}`;
                    obj.title.title = $(`.article-card__body h2 a[href="${obj.title.fulllink}"]`).text();
                    obj.title.link = obj.title.fulllink.split("/")[3] + "/" + obj.title.fulllink.split("/")[4];
                    obj.author.image = $(".author-avatar img")[i].attribs.src;
                    obj.author.name = $(".author-name")[i].lastChild.data.split("\n")[1];
                    obj.author.date = $(".entry-date")[i].lastChild.data;
                    obj.article = $(".article-card__body .article-content p")[i];
                    obj.article = $(obj.article).html();
                    obj.articleImage = $(".article-card__image img")[i].attribs.src;
                    // data.push(`${obj}`);
                    data.push(obj)
                    obj = {
                        title: {
                            link: null,
                            title: null
                        },
                        author: {
                            image: null,
                            name: null,
                            date: null
                        },
                        article: null,
                        articleImage: null
                    };


                } catch (e){
                    let some = $(".article-card__body h2 a")[i];
                    // console.log(some)
                }
                //    console.log(obj)
            })
            // console.log(data)
            res.json({ success: true, data: data });

        })
        .catch(err => console.log(err));
})
blogs.post("/blogDetail", (req, res) => {
    // console.log("Usama",req.body);
    if (req.body.url) {
        axios(req.body.url)
            .then(responce => {
                var html = responce.data;
                const $ = cheerio.load(html);
                var newurl = req.body.url.split("/");
                newurl = "/" + newurl[3] + "/" + newurl[4];
                // console.log(newurl);
                $("a").attr("href", "javascript:void(0)")
                var article = $(".article-content").html();
                //    article= $(article).find(`[href="${req.body.url}"]`).each((i,el)=>{
                //         // $(el).attr("href",newurl);
                //         console.log($(el).attr("href"))
                //         // console.log($(el).html())
                //     })
                //     article=$(article).html()
                //     console.log(article)
                // console.log(true);
                res.json({ success: true, article });
            })
            .catch(err => console.log(err))
    }
})
module.exports = blogs;