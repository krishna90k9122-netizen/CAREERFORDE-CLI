export function githubStats(repos) {
    const totalRepos = repos.length;
    const totalStats = repos.reduce(
        (sum, repos) => sum + repos.stargazers_count,
        0
    );

    const totalForks = repos.reduce(
        (sum, repo) => sum + repo.forks_count,
        0
    );

    const languages = {};

    repos.forEach((repo) => {
        if (repo.languages) {
            languages(repo.languages) = (languages(repo.languages) || 0) + 1;
        }
    });

    return {
        totalRepos,
        totalStats,
        totalForks,
        languages
    }

}

// import axios from "axios";

// export function analyzeUser(profile) {
//     let score=0;
//     let strengths=[];
//     let improvement=[];
    
//     if(profile.public_repos>=10){
//         score=score+20;
//         strengths.push("You have a good number of public repositories.");
//     }else{   
//         improvement.push("Focus on improving the quality and visibility of your existing repositories.");
//     }

//     if(profile.followers>=50){
//         score=score+20;
//         strengths.push("You have a good number of followers.");  
//     }
//     else{
//         improvement.push("Engage with the community and contribute to open-source projects to increase your followers.");       


//     }
 
//     if(profile.following>=50){
//         score=score+20;
//         strength.push("You are following a good number of developers and projects.");       
//     }else{
//         improvement.push("Follow more developers and projects to stay updated with the latest trends and technologies.");       

//     }

//     if(profile.bio && profile.bio.length>0){
//         score=score+20;
//         strength.push("You have a bio that provides information about yourself.");              
//     }else{
//         improvement.push("Add a bio to your GitHub profile to provide information about yourself and your interests."); 
//     }
//      return {   
//             score,
//             strength,
//             improvement
//         };  

//     }

   