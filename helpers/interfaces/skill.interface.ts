type FontAwesomeSize = 'small' | 'medium' | 'large';

export interface FontAwesome {
    set: string;
    icon: string;
}
  
export interface Skill {
    skill: string;
    font: FontAwesome;
}