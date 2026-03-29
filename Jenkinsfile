// // pipeline {
// //     agent any

// //     environment {
// //         NETLIFY_SITE_ID = '9caf4490-e6b8-484d-8097-ca69e614d640'
// //         NETLIFY_AUTH_TOKEN = credentials('netlify-token')
// //     }

// //     triggers {
// //         pollSCM('* * * * *')
// //     }

// //     stages {
// //         stage('Build') {
// //             steps {
// //                 bat 'npm install'
// //                 bat 'npm run build'
// //             }
// //         }

// //         stage('Test') {
// //             steps {
// //                 bat 'npm test -- --watchAll=false'
// //             }
// //         }

// //         stage('Deploy') {
// //             steps {
// //                 bat 'npm install -g netlify-cli'
// //                 bat 'netlify deploy --prod --dir=build --site=%NETLIFY_SITE_ID% --auth=%NETLIFY_AUTH_TOKEN%'
// //             }
// //         }
// //     }
// // }

// pipeline {
//     agent any

//     environment {
//         NETLIFY_SITE_ID = '9caf4490-e6b8-484d-8097-ca69e614d640'
//         NETLIFY_AUTH_TOKEN = credentials('netlify-token')
//     }

//     triggers {
//         pollSCM('* * * * *')
//     }

//     stages {
//         stage('Build') {
//             steps {
//                 sh 'npm install'
//                 sh 'npm run build'
//             }
//         }

//         stage('Test') {
//             steps {
//                 sh 'npm test -- --watchAll=false'
//             }
//         }

//         stage('Deploy') {
//             steps {
//                 sh 'npm install -g netlify-cli'
//                 sh 'netlify deploy --prod --dir=build --site=$NETLIFY_SITE_ID --auth=$NETLIFY_AUTH_TOKEN'
//             }
//         }
//     }
// }

pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = '9caf4490-e6b8-484d-8097-ca69e614d640'
        NETLIFY_AUTH_TOKEN = credentials('netlify-token')
    }

    triggers {
        pollSCM('* * * * *')
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'CI=true npm test -- --watchAll=false'
            }
        }

        stage('Deploy') {
            steps {
                sh 'npx netlify-cli deploy --prod --dir=build --site=$NETLIFY_SITE_ID --auth=$NETLIFY_AUTH_TOKEN'
            }
        }
    }
}