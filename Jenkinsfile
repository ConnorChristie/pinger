pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Upload') {
      steps {
        zip(dir: '.', zipFile: 'artifacts.zip')
        sh '''echo "Creating a new release in github"
${GITHUB_RELEASE_BIN} release --tag ${TAG_NAME} --name "${TAG_NAME}"

echo "Uploading the artifacts into github"
${GITHUB_RELEASE_BIN} upload --tag ${TAG_NAME} --name "${GITHUB_REPO}-${TAG_NAME}.zip" --file artifacts.zip'''
      }
    }
    stage('Push') {
      steps {
        sh '''echo "Sending update command to DABs"
node ${UPDATE_PUSHER} ${TAG_NAME}'''
      }
    }
  }
  environment {
    GITHUB_USER = 'ConnorChristie'
    GITHUB_REPO = 'pinger'
    GITHUB_TOKEN = credentials('github-secret')
    UPDATE_PUSHER = '/var/lib/jenkins/IoT-DAB-Deployer/updater/update_pusher.js'
    GITHUB_RELEASE_BIN = '/home/connorc/go/bin/github-release'
  }
}