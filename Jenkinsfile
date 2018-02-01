pipeline {
  agent {
    node {
      label 'deployer'
    }
    
  }
  stages {
    stage('Deploy') {
      agent {
        node {
          label 'deployer'
        }
        
      }
      steps {
        echo 'Hello world'
      }
    }
  }
}