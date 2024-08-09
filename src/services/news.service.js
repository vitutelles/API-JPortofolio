import News from "../models/News.js"

const createService = (body) => News.create(body);

const findAllService = (offset, limit) => News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user")

const counterNews = () => News.countDocuments();

const topNewsService = () => News.findOne().sort({ _id: -1 }).populate("user");

const findByidService = (id) => News.findById(id).populate("user");


export {
    createService,
    findAllService,
    counterNews,
    topNewsService,
    findByidService,
};