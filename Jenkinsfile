pipeline {
  agent {
    node('deployer') {
      label 'deployer'
    }
    
  }
  stages {
    stage('Deploy') {
      node('deployer') {
        checkout scm
        echo "workssss"
    }
  }
}
