



const getAllFactory = (factorymodel) => {
    return async function(req, res) {
    try {
        const userDetails = req.body
        const user = await factorymodel.find(userDetails)
        if(!user) {
            throw new Error("user not found")
        }
        res.status(201).json({
            status:"success",
            message: user
        })
    }catch(e) {
        res.status(500).json({
            status: "failure",
            message: e.message
        })
    }
} 
}


const createFactory = (factorymodel) => {
    return  async function(req, res) {
    try{
        const userDetails = req.body
        const user = await factorymodel.create(userDetails)
        res.status(201).json({
            status:"success",
            message:userDetails
        })
    }catch(e) {
        res.status(500).json({
            status:"failure",
            message: e.message
        })
    }
}
}

const getFactoryById = (factorymodel) => {
    return async function(req, res) {
    try {
        const {userId} = req.params 
        const user = await factorymodel.findByIdAndDelete(userId)
        if(!user) {
            throw new Error(`${user} not found`)
        }
        res.status(201).json({
            status: "success",
            message:user
        })
    }catch(e) {
        res.status(500).json({
            status:"failure",
            message: e.message
        })
    }
}

}
const deleteByFactoryId = (factorymodel) => { 
    return async function(req, res) {
        try{
            const {userId} = req.params 
            const userdelete = await factorymodel.deleteById(userId)
            if(!userdelete){
                throw new Error(`User with ID ${userId} not found`)
            }
            res.status(201).json({
                status: "success",
                message: user
            })
        }catch(e) {
            res.status(500).json({
                status: "failure",
                message:e.message
            })
     }
 }
}

module.exports = {getAllFactory, createFactory, getFactoryById, deleteByFactoryId}
      





