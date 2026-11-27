class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {

        for ( let i = 0; i < sandwiches.length; i++ ) {
            let found = false;
            for (let j = 0; j < students.length; j++) {
 
                if (sandwiches[i] === students[j]) {
                    students.splice(j,1);
                    found = true;
                    break;
                }

            }
             if (!found){
                    break;
                }
        }

        return students.length;

    }
}
