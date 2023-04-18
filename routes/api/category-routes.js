const router = require('express').Router();
const { Category, Product } = require('../../models');

// Get all categories
router.get('/', async(req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve categories' });
  }
});

// Get a category by ID
router.get('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findByPk(categoryId, {
      include: [{ model: Product }],
    });
    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve category' });
  }
});

// Create a new category
router.post('/', async(req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create category' });
  }
});

// Update a category by ID
router.put('/:id', async(req, res) => {
  try {
    const id = parseInt(req.params.id);
    const updateCategory = await Category.update(req.body, { where: { id } });
    res.status(200).json(updateCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update category' });
  }
});

// Delete a category by ID
router.delete('/:id', async(req, res) => {
  try {
    const id = parseInt(req.params.id);
    const deleteCategory = await Category.destroy({ where: { id } });
    res.status(200).json(deleteCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete category' });
  }
});

module.exports = router;
