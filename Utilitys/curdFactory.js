// GET ALL DOCUMENTS
const getAllFactory = (Model) => {
    return async (req, res) => {
        try {
            const docs = await Model.find();
            res.status(200).json({
                status: "success",
                data: docs
            });
        } catch (e) {
            res.status(500).json({ status: "failure", message: e.message });
        }
    };
};

// CREATE DOCUMENT
const createFactory = (Model) => {
    return async (req, res) => {
        try {
            const doc = await Model.create(req.body);
            res.status(201).json({
                status: "success",
                data: doc
            });
        } catch (e) {
            res.status(500).json({ status: "failure", message: e.message });
        }
    };
};

// GET DOCUMENT BY ID
const getFactoryById = (Model) => {
    return async (req, res) => {
        try {
            const { userId } = req.params;
            const doc = await Model.findById(userId);

            if (!doc) {
                return res.status(404).json({
                    status: "failure",
                    message: "Document not found"
                });
            }

            res.status(200).json({
                status: "success",
                data: doc
            });
        } catch (e) {
            res.status(500).json({ status: "failure", message: e.message });
        }
    };
};

// DELETE DOCUMENT BY ID
const deleteByFactoryId = (Model) => {
    return async (req, res) => {
        try {
            const { userId } = req.params;
            const deletedDoc = await Model.findByIdAndDelete(userId);

            if (!deletedDoc) {
                return res.status(404).json({
                    status: "failure",
                    message: `Document with ID ${userId} not found`
                });
            }

            res.status(200).json({
                status: "success",
                message: "Document deleted successfully"
            });
        } catch (e) {
            res.status(500).json({ status: "failure", message: e.message });
        }
    };
};

module.exports = {
    getAllFactory,
    createFactory,
    getFactoryById,
    deleteByFactoryId
};
