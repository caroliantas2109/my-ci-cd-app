pipeline {
    agent any

    environment {
       NETLIFY_SITE_ID = 'YOUR_SITE_ID'
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