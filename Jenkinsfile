pipeline {
  agent {
    node('deployer') {
      label 'deployer'
    }
    
  }
  stages {
    stage('Deploy') {
      agent {
        node('deployer') {
          label 'deployer'
        }
        
      }
      steps {
        echo 'Hello world'
      }
    }
  }
}
