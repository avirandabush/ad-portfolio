import { getDocs, collection, query, orderBy } from "firebase/firestore"
import { db } from "./firebase"
import Project from "../constants/ProjectInterface"

export const fetchProjectsFromCollection = async (
    collectionName: string
): Promise<Project[]> => {
    try {
        const projectsRef = collection(db, collectionName)
        const q = query(projectsRef, orderBy("creationDate", "desc"))
        const snapshot = await getDocs(q)

        const projects = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        })) as Project[]

        return projects
    } catch (error) {
        console.error(`Failed to fetch projects from "${collectionName}":`, error)
        return []
    }
}
