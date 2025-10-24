provider "aws" { region = var.region }
resource "aws_ecr_repository" "payroll" { name = var.ecr_repo_name }
