  
export function analyzeUser(profile) {

    let score = 0;

    let strengths = [];

    let improvements = [];

    if (profile.public_repos >= 10) {

        score += 3;

        strengths.push("Good number of repositories.");

    } else {

        improvements.push("Create more repositories.");

    }

    if (profile.followers >= 20) {

        score += 2;

        strengths.push("Good follower count.");

    } else {

        improvements.push("Increase followers by contributing to open source.");

    }

    if (profile.bio) {

        score += 2;

        strengths.push("Professional GitHub bio.");

    } else {

        improvements.push("Add a professional bio.");

    }

    return {

        score,

        strengths,

        improvements

    };

}