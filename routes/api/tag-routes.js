const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const allTags = await Tag.findAll({include: Product})
    res.json(allTags)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to retrieve tags' });
  }
  
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const oneTag = await Tag.findByPk(req.params.id, {include: Product})
    res.json(oneTag)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Tag not found"})
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const { tag_name } = req.body; 
    const newTag = await Tag.create({ tag_name }); 
    res.json(newTag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create new tag" });
  }
});


router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const { tag_name } = req.body; 
    const updatedTag = await Tag.update({ tag_name }, {
      where: { id: req.params.id } 
    }); 
    res.json(updatedTag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update tag" });
  }
});


router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.destroy({where:{id: req.params.id}} )
    res.json(deleteTag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete tag" });
  }
});

module.exports = router;
