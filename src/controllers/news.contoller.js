import { createService, findAllService, counterNews } from "../services/news.service.js";

const create = async (req, res) => {
    try {
        const { title, text, banner } = req.body;

        if (!title || !banner || !text) {
            return res.status(400).send({
                message: "Submit all fields for registration",
            });
        }

        await createService({
            title,
            text,
            banner,
            user: req.userId,
        });

        return res.sendStatus(201);

    } catch (err) {
        if (!res.headersSent) {
            return res.status(500).send({ message: err.message });
        }
    }
};

const findAll = async (req, res) => {
       let  {limit, offset} = req.query;

        limit = Number(limit)
        offset = Number(offset);

        if (!limit) {
            limit = 5;
        }

        if (!offset){
            offset = 0;
        }

        console.log(typeof limit, typeof offset);

        const news = await findAllService(offset, limit);
        const total = await counterNews()
        const currentUrl = req.baseUrl
        console.log(total)

        const next = offset + limit;
        const nextUrl = next < total ? `${currentUrl}?limit=${limit}&offset=${next}`: null;
        

        const previous = offset - limit < 0 ? null : offset - limit ;
        const previousUrl = previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}`: null;
        

        if (news.length === 0) {
            return res.status(400).send({ 
                message: "There are no registered news" });
        }
        return res.send({
            nextUrl,
            previousUrl,
            limit,
            offset,
            total,

            results: news.map(item => ({
                id: item._id,
                tittle: item.tittle,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                comments: item.comments,
                name: item.user.name,
                username: item.user.username,
                userAvatar: item.user.avatar,

            })),

        });
    
};

export { create, findAll };
