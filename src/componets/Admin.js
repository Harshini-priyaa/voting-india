import React, { useState, useEffect } from "react";

function Admin() {
  const initialCandidates = [
    "Indian National Congress",
    "Bharatiya Janata Party",
    "Dravida Munnetra Kazhagam",
    "Communist Party of India",
    "All India Anna Dravida Munnetra Kazhagam",
    "Desiya Murpokku Dravida Kazhagam",
    "Viduthalai Chiruthaigal Katchi",
    "Naam Tamilar",
    "Indian Union Muslim League"
  ];

  const [candidates, setCandidates] = useState(initialCandidates);
  const [newCandidate, setNewCandidate] = useState("");

  // Load candidates from local storage on initial render
  useEffect(() => {
    const storedCandidates = localStorage.getItem("candidates");
    if (storedCandidates) {
      setCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  // Save candidates to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("candidates", JSON.stringify(candidates));
  }, [candidates]);

  const handleAddCandidate = () => {
    if (newCandidate.trim() !== "") {
      setCandidates([...candidates, newCandidate]);
      setNewCandidate("");
    }
  };

  return (
    <div>
      <h1>Total Candidates</h1>
      <ol>
        {candidates.map((candidate, index) => (
          <li key={index}>{candidate}</li>
        ))}
      </ol>

      <div>
        <input
          type="text"
          value={newCandidate}
          onChange={(e) => setNewCandidate(e.target.value)}
          placeholder="Enter candidate name"
        />
        <button onClick={handleAddCandidate}>ADD CANDIDATE</button>
      </div>
    </div>
  );
}

export default Admin;



// import React from "react";


// function Admin(){
    
//     return(
//         <div>
//              <h1>
//             Total Candidates
//         </h1>
//         <ol>
//             <li>Indian National Congress</li>
//             <li>Bharatiya Janata Party</li>
//             <li>Dravida Munnetra Kazhagam</li>
//             <li>Communist Party of India</li>
//             <li>All India Anna Dravida Munnetra Kazhagam</li>
//             <li>Desiya Murpokku Dravida Kazhagam</li>
//             <li>Viduthalai Chiruthaigal Katchi</li>
//             <li>Naam Tamilar</li>
//             <li>Indian Union Muslim League</li>
//         </ol>

//         <button>ADD CANDIDATE</button>
//         </div>
       
//     )
// }

// export default Admin