const Building = require('../../models/building');


const  getAllBuildings =   async (req, res) => { 
    try {
        const buildingList = await Building.find();                                   
        res.json({                            
            success: true,                       
            data: buildingList                                          
        });                                  
    } catch (err) {                                   
        res.json({                           
            success: false,
            message: err                             
        });                                                                                               
    } 
}

const addOneBuilding = async (req, res) => {
    try {
        //const buildingList = await Building.find();
        const newBuild = new Building({
            //buildingId: buildingList.length+1,
            buildingName: req.body.name,
            buildingPicture: req.body.picture,
            location: req.body.location,
            description: req.body.description
        });
        const saveResult = await newBuild.save();
        res.json({
            success: true,
            data: saveResult
        });
    } catch (err) {
        res.json({
            success: false,
            message: err
        });
    }
};

const updateOneBuilding = async(req, res)=>{
    try {
		let newObj = {};
		newObj[req.params.field] = req.body.newValue;
        const toUpdate = await Building.updateOne(
            { _id: req.params.buildingId},
            //{ $set: {req.params.filed: req.body.name}}
            { $set: newObj}
			
            )
		res.json({
			success: true,
			data: toUpdate
		});
    } catch (err) {
        res.json({
            success: false,
            message: err
        })
    }

}




module.exports = { 
    getAllBuildings, 
    addOneBuilding, 
    updateOneBuilding 
}
