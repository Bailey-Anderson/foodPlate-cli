import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Goal } from '../models/Goal';
import { GoalsService } from '../services/goals.service';

@Component({
  selector: 'fp-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  goalForm: FormGroup;
  goal: Goal;
  allGoals;
  errorMessage: string;
  isLoading: boolean;
  activeGoal: Goal;
  newGoalView = false;

  showEditGoalForm(goal: Goal): void {
    this.newGoalView = true;
    this.getGoal(goal.id);
    this.showGoalAddEditForm(true);
  }

  showAddGoalForm(): void {
    this.showGoalAddEditForm(true);
    this.resetGoalForm();
  }

  showGoalAddEditForm(showForm: boolean): void {
    this.newGoalView = showForm;
  }

  toggleGoalComplete(goal: Goal): void {
    goal.didIt = !goal.didIt;
  }

  resetGoalForm(): void {
    this.goalForm.reset();
  }

  createform(): void {
    this.goalForm = this.formBuilder.group({
      id: [''],
      goalTitle: ['', Validators.required],
      deadline: ['', Validators.required],
      didIt: ['']
    });
  }

  getGoal(id): void {
    this.goalsService.getGoalById(id).subscribe(goal => this.goalRetrieved(goal),
    error => console.log(error));
  }

  goalRetrieved(goal: Goal): void {
    this.goal = goal;
    this.goalForm.setValue({
      id: this.goal.id,
      deadline: this.goal.deadline,
      didIt: this.goal.didIt,
      goalTitle: this.goal.goalTitle
    })
  }

  deleteGoal(goal): void {
    this.goalsService.deleteGoalbyId(goal.id).subscribe(goal => {this.goalsService.getGoals();
    console.log(goal)});
  }

  deleteCompleted(): void {
    const completedGoals = this.allGoals.filter(goals => goals.didIt === true)
      .map(goals => this.deleteGoal(goals));
    console.log(completedGoals);
  }

  insertGoal(goal: Goal): void {
    this.goalsService.addGoal(goal).subscribe(goal => {
      this.goalsService.getGoals();
    },
    (error) => console.log(error));
  }

  updateGoal(goal: Goal): void {
    this.goalsService.updateGoal(goal).subscribe(goal => this.goalsService.getGoals());
  }

  toggleAccomplished(): void {
    console.log(`toggleAccomplished called`);
    this.goalForm.patchValue({didIt: true});
  }

  submitGoal(goal): void {
    console.log(`submitGoal() called`);
    if(this.goalForm.invalid) {
      console.log(`submtGoal(): this goalForm.invalid = true`);
      return;
    }
    this.showGoalAddEditForm(false);

    if (goal.id === null || goal.id < 1 ) {
      this.insertGoal(goal);
    } else {
      this.updateGoal(goal)
    }
  }

  constructor(private formBuilder: FormBuilder, private goalsService: GoalsService) { 
    this.createform();
  }

  ngOnInit(): void {
    this.goalsService.getGoals().subscribe((res: any) => {
      this.allGoals = res;
      console.log(this.allGoals);
      this.isLoading = false;
    },
    err => {
      this.errorMessage = err;
      console.log(this.errorMessage);
      this.isLoading = false;
    });

  }

}
