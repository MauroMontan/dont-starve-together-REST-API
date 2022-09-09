import {
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  Entity,
  JoinColumn,
} from 'typeorm';
import { RecipeStats } from './entities';

@Entity()
export class CrockpotRecipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => RecipeStats, { cascade: true })
  @JoinColumn({ name: 'recipe_stat_id' })
  stats: RecipeStats;
}
