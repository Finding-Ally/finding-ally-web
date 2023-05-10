
/** Controller */
import Projects from "@/model/room"

// get : http://localhost:3000/api/rooms
export async function getProjects(req, res){
    try {
        const rooms = await Projects.find({})

        if(!rooms) return res.status(404).json( { error: "Data not Found"})
        return res.status(200).json(rooms)
    } catch (error) {
        return res.status(404).json( { error : "Error While Fetching Data"})
    }
}

// get : http://localhost:3000/api/rooms/1
export async function getProject(req, res){
    try {
        const { roomId } = req.query;

        if(roomId){
            const room = await Projects.findById(roomId);
            return res.status(200).json(room)
        }
        return res.status(404).json({ error : "Project not Selected...!"});
    } catch (error) {
        return res.status(404).json({ error: "Cannot get the Project...!"})
    }
}

// post : http://localhost:3000/api/rooms
export async function postProject(req, res){
    try {
        const formData = req.body;
        if(!formData) return res.status(404).json( { error: "Form Data Not Provided...!"});
        Projects.create( formData, function(err, data){
            console.log(err, data)
            return res.status(200).json(data)
        })
    } catch (error) {
        return res.status(404).json({ error })
    }
}

// put : http://localhost:3000/api/rooms/1
export async function putProject(req, res){
    try {
        const { roomId } = req.query;
        const formData = req.body;

        if(roomId && formData){
            const room = await Projects.findByIdAndUpdate(roomId, 
                { $set: formData },
                );
            return res.status(200).json(room)
        }
        return res.status(404).json( { error: "Project Not Selected...!"})
    } catch (error) {
        return res.status(404).json({ error: "Error While Updating the Data...!"})
    }
}

// delete : http://localhost:3000/api/rooms/1
export async function deleteProject(req, res){
    try {
        const { roomId } = req.query;

        if(roomId){
            const room = await Projects.findByIdAndDelete(roomId)
            return res.status(200).json(room)
        }

        return res.status(404).json({ error: "Project Not Selected...!"})

    } catch (error) {
        return res.status(404).json({ error: "Error While Deleting the Project...!"})
    }
}