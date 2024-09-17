const Article = require("../models/Article");

exports.createArticle = (req, res) => {
  const article = new Article({
    ...req.body,
  });
  article
    .save()
    .then(() => res.status(201).json({ message: "Article enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getOneArticle = (req, res) => {
  Article.findOne({ _id: req.params.id })
    .then((article) => res.status(200).json(article))
    .catch((error) => res.status(404).json({ error }));
};

exports.getArticles = (req, res) => {
  Article.find()
    .then((articles) => res.status(200).json(articles))
    .catch((error) => res.status(400).json({ error }));
};
