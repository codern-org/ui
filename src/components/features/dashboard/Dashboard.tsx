import { Button } from '@/components/common/Button';
import { SearchWorkspaceInput } from '@/components/features/dashboard/SearchWorkspaceInput';
import { WorkspaceCard } from '@/components/features/dashboard/WorkspaceCard';
import { WorkspaceCardSkeleton } from '@/components/features/dashboard/WorkspaceCardSkeleton';
import { Workspace } from '@/types/WorkspaceTypes';

type DashboardProps = {
  workspaces: Workspace[] | undefined;
  recentWorkspaces: Workspace[] | undefined;
};

export const Dashboard = ({ workspaces, recentWorkspaces }: DashboardProps) => {
  return (
    <>
      <div className="container flex flex-col py-8 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <div className="mt-4 flex items-center space-x-2 md:mt-0">
          <SearchWorkspaceInput />
          <Button size="sm">Add Workspace</Button>
        </div>
      </div>

      <div className="container space-y-6">
        {recentWorkspaces && recentWorkspaces.length > 0 && (
          <div className="flex flex-col">
            <h2 className="mb-3 text-lg font-semibold">Recent Workspaces</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {recentWorkspaces.map((workspace) => (
                <WorkspaceCard
                  key={workspace.id}
                  workspace={workspace}
                />
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col">
          <h2 className="mb-3 text-lg font-semibold">All Workspaces</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {workspaces &&
              workspaces.map((workspace) => (
                <WorkspaceCard
                  key={workspace.id}
                  workspace={workspace}
                />
              ))}
            {!workspaces && <WorkspaceCardSkeleton />}
          </div>

          {workspaces && workspaces.length === 0 && (
            <p className="text-sm text-muted-foreground">
              Looks like you haven't joined any workspaces yet
            </p>
          )}
        </div>
      </div>
    </>
  );
};
