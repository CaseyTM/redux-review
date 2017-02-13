export default function selectStudent(student){
	console.log("clicked");
	return{
		type:"PICK_STUDENT",
		payload: student
	}
}