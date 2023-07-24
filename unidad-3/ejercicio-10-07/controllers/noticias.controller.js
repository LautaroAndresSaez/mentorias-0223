const { readNoticias, saveNoticias } = require("../services/noticias.services");

const create = (req, res) => {
  const { body } = req;
  const noticias = readNoticias();
  noticias.push(body);
  saveNoticias(noticias);
  res.send("Noticia fue creada con exito!");
};

const findAll = (req, res) => {
  const noticias = readNoticias();
  res.send(noticias);
};

const deleteNoticia = (req, res) => {
  const { id } = req.params;
  const noticias = readNoticias();
  const noticiasNuevas = noticias.filter(
    (noticia) => noticia.id !== Number(id)
  );
  saveNoticias(noticiasNuevas);
  res.send(`Noticia ${id} eliminada`);
};

const updateNoticia = (req, res) => {
  const { id } = req.params;
  const nuevosDatos = req.body;
  const noticias = readNoticias();
  const noticiasNuevas = noticias.map((noticia) => {
    if (noticia.id === Number(id)) {
      return {
        ...noticias,
        ...nuevosDatos,
      };
    }
    return noticia;
  });
  saveNoticias(noticiasNuevas);
  res.send(`Noticia ${id} actualizada`);
};

module.exports = {
  create,
  findAll,
  deleteNoticia,
  updateNoticia,
};
