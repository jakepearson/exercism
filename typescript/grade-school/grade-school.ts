interface Kids {
  [key: number]: string[]
  size: number
}

export default class GradeSchool {
  kids: Kids

  constructor() {
    this.kids = {} as Kids
  }

  addStudent(name: string, grade: number) {
    if (!this.kids[grade]) {
      this.kids[grade] = []
    }
    this.kids[grade].push(name)
    this.kids[grade] = this.kids[grade].sort()
  }

  studentRoster(): Kids {
    return this.kids
  }

  studentsInGrade(grade: number): string[] {
    if (this.kids[grade]) {
      return this.kids[grade]
    }
    return []
  }
}