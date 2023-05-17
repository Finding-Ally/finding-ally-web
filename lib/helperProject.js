
const BASE_URL = process.env.NODE_ENV === "development" ? 'http://localhost:3000' : 'https://gatiki.club'

// BASE_URL : process.env.NODE_ENV === "development" ? 'http://localhost:3000' : 'https://gatiki.club'

//  'http://localhost:3000'
//  'https://gatiki.club'

console.log("BASE_URL", BASE_URL)
// all PROJECT
export const getProjects = async () => {
    const response = await fetch(`${BASE_URL}/api/projects`)
    const json = await response.json()

    return json;
}

// single PROJECT
export const getProject = async (projectId) => {
    const response = await fetch(`${BASE_URL}/api/projects/${projectId}`);
    const json = await response.json()

    if(json) return json;
    return {}
}

// posting a new PROJECT
export async function addProject(formData){
    try{
        const Options = {
            method : 'POST',
            headers : { 'Content-Type': "application/json", 'Accept': "application/json"},
            body: JSON.stringify(formData)
        }
        
        const response = await fetch(`${BASE_URL}/api/projects`, Options)
        const json = await response.json()

        return json;
    }catch(error){
        return error;
    }
}


// Update a new PROJECT
export async function updateProject(projectId, formData){
    const Options = {
        method : 'PUT',
        headers : { 'Content-Type': "application/json"},
        body: JSON.stringify(formData)
    }

    const response = await fetch(`${BASE_URL}/api/projects/${projectId}`, Options)
    const json = await response.json()
    return json;
}


// Delete a new PROJECT
export async function deleteProject(projectId){
    const Options = {
        method : 'DELETE',
        headers : { 'Content-Type': "application/json"},
    }

    const response = await fetch(`${BASE_URL}/api/projects/${projectId}`, Options)
    const json = await response.json()
    return json;
}