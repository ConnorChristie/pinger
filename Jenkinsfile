pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Upload') {
      when {
        expression {
          GITHUB_RELEASE_EXISTS = sh(returnStatus: true, script: '${GITHUB_RELEASE_BIN} info --tag ${TAG_NAME}')
          return GITHUB_RELEASE_EXISTS == 0
        }
      }
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
node ${UPDATE_PUSHER} ${GITHUB_USER} ${GITHUB_REPO} ${TAG_NAME}'''
      }
    }
  }
  environment {
    GITHUB_USER = 'ConnorChristie'
    GITHUB_REPO = 'pinger'
    GITHUB_TOKEN = credentials('github-secret')
    AZURE_IOT_CONNECTION = credentials('azure-iot-connection')
    UPDATE_PUSHER = '/var/lib/jenkins/IoT-DAB-Deployer/updater/update_pusher.js'
    GITHUB_RELEASE_BIN = '/home/connorc/go/bin/github-release'
  }
}
