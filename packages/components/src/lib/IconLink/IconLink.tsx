import { Link, Icon } from '@chakra-ui/react';

export type IconLinkProps = {
  href: string;
  icon: any;
};
export const IconLink: React.VFC<IconLinkProps> = ({ href, icon }) => {
  return (
    <Link href={href} isExternal>
      <Icon
        w={6}
        h={6}
        as={icon}
        transition="all 0.2s"
        _hover={{
          color: 'blue.500',
          transform: 'scale(1.1)',
        }}
      />
    </Link>
  );
};
