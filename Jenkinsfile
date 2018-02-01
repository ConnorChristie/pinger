pipeline {
  agent any
  stages {
    stage('Upload to Github') {
      steps {
        zip dir: '.', glob: '', zipFile: 'artifacts.zip'
        sh '''echo "Uploading the artifacts into github"
# github-release upload --user ${GITHUB_ORGANIZATION} --repo ${GITHUB_REPO} --tag ${VERSION_NAME} --name "${PROJECT_NAME}-${TAG_NAME}.zip" --file artifacts.zip'''
      }
    }
  }
  environment {
    GITHUB_ORGANIZATION = 'ConnorChristie'
    GITHUB_REPO = 'pinger'
    VERSION_NAME = '1.0'
    PROJECT_NAME = 'DAB'
    GITHUB_TOKEN = credentials('github-secret')
  }
}
