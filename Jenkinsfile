pipeline {
  agent any
  stages {
    stage('Upload to Github') {
      steps {
        zip(dir: '.', zipFile: 'artifacts.zip')
        sh '''echo "Creating a new release in github"
github-release release --user ${GITHUB_ORGANIZATION} --repo ${GITHUB_REPO} --tag ${TAG_NAME} --name "${TAG_NAME}"

echo "Uploading the artifacts into github"
github-release upload --user ${GITHUB_ORGANIZATION} --repo ${GITHUB_REPO} --tag ${TAG_NAME} --name "${PROJECT_NAME}-${TAG_NAME}.zip" --file artifacts.zip'''
      }
    }
    stage('Update DAB') {
      steps {
        sh '''echo "Sending update command to DABs"
node /var/jenkins_home/dab_service/update_pusher.js ${TAG_NAME}'''
      }
    }
  }
  environment {
    GITHUB_ORGANIZATION = 'ConnorChristie'
    GITHUB_REPO = 'pinger'
    PROJECT_NAME = 'DAB'
    GITHUB_TOKEN = credentials('github-secret')
  }
}