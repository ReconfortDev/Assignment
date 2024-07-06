import {Component, OnInit} from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {NgClass, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    NgClass,
    NgOptimizedImage
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent implements OnInit{
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.setInitialTheme();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  get isDarkMode(): boolean {
    return this.themeService.isDarkMode;
  }
}
