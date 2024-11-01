# -*- coding: utf-8 -*-
def t290112_1():
    """State 0,1"""
    t290112_x1(flag1=6000, flag2=6000, actionbutton1=6100, actionbutton2=6101, flag3=290, flag4=2)
    Quit()

def t290112_x0():
    """State 0,1"""
    assert t290112_x7(z1=99999, z2=99999, z3=99999, z4=99999)
    """State 2"""
    return 0

def t290112_x1(flag1=6000, flag2=6000, actionbutton1=6100, actionbutton2=6101, flag3=290, flag4=2):
    """State 0"""
    while True:
        """State 1"""
        call = t290112_x3(actionbutton1=actionbutton1, actionbutton2=actionbutton2, flag3=flag3, flag4=flag4)
        if not GetEventStatus(flag1) or not GetEventStatus(flag2):
            pass
        elif IsMultiplayerInProgress() == 1:
            """State 2"""
            call = t290112_x2(actionbutton1=actionbutton1, flag3=flag3, flag4=flag4)
            if not IsMultiplayerInProgress():
                continue
            elif not GetEventStatus(flag1) or not GetEventStatus(flag2):
                pass
        """State 3"""
        call = t290112_x5()
        assert GetEventStatus(flag1) == 1 and GetEventStatus(flag2) == 1
    """Unused"""
    """State 4"""
    return 0

def t290112_x2(actionbutton1=6100, flag3=290, flag4=2):
    """State 0,3"""
    ForceCloseMenu()
    while True:
        """State 2"""
        if GetEventStatus(10007810 + flag3 * 10000 + flag4 * 20) == 1:
            pass
        elif (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer() and
              not IsPlayerDead() and not IsCharacterDisabled() and CheckActionButtonArea(actionbutton1)):
            """State 4"""
            SetTalkTime(0.33)
            assert t290112_x8(flag3=flag3, flag4=flag4)
        """State 1"""
        assert not GetEventStatus(10007810 + flag3 * 10000 + flag4 * 20)
    """Unused"""
    """State 5"""
    return 0

def t290112_x3(actionbutton1=6100, actionbutton2=6101, flag3=290, flag4=2):
    """State 0"""
    while True:
        """State 2"""
        DebugEvent('稼動状態_非マルチ中')
        if not GetEventStatus(10007810 + flag3 * 10000 + flag4 * 20):
            """State 1"""
            DebugEvent('非稼動状態_非マルチ中')
            if GetEventStatus(10007810 + flag3 * 10000 + flag4 * 20) == 1:
                pass
            elif (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer()
                  and not IsPlayerDead() and not IsCharacterDisabled() and CheckActionButtonArea(actionbutton1)):
                """State 6"""
                SetTalkTime(0.33)
                def WhilePaused():
                    c1_73(1)
                assert (t290112_x8(flag3=flag3, flag4=flag4) and GetEventStatus(10007810 + flag3 * 10000
                        + flag4 * 20) == 1)
        elif (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer() and
              not IsPlayerDead() and not IsCharacterDisabled() and CheckActionButtonArea(actionbutton2)):
            """State 3"""
            ClearPlayerDamageInfo()
            SetTalkTime(0.33)
            """State 5"""
            call = t290112_x4(flag3=flag3, flag4=flag4)
            if call.Done():
                pass
            elif GetDistanceToPlayer() > 5 or HasPlayerBeenAttacked() == 1:
                """State 4"""
                assert t290112_x0()
    """Unused"""
    """State 7"""
    return 0

def t290112_x4(flag3=290, flag4=2):
    """State 0,1"""
    OpenGenericDialog(2, 10010713, 3, 4, 2)
    def WhilePaused():
        SetTalkTime(0.33)
    if GetGenericDialogButtonResult() == 1:
        """State 3"""
        DebugEvent('OK')
        """State 4"""
        assert t290112_x6(flag3=flag3, flag4=flag4, z5=0)
    elif not IsGenericDialogOpen():
        """State 2"""
        DebugEvent('CANCEL')
    """State 5"""
    return 0

def t290112_x5():
    """State 0,1"""
    ForceCloseMenu()
    Quit()
    """Unused"""
    """State 2"""
    return 0

def t290112_x6(flag3=290, flag4=2, z5=0):
    """State 0,1"""
    SetEventState(flag3 * 10000 + 70000100 + flag4 * 1, 1)
    """State 2"""
    return 0

def t290112_x7(z1=99999, z2=99999, z3=99999, z4=99999):
    """State 0,1"""
    DebugEvent('会話判定')
    if not CheckSpecificPersonTalkHasEnded(0):
        """State 7"""
        ClearTalkProgressData()
        StopEventAnimWithoutForcingConversationEnd(0)
        """State 6"""
        ReportConversationEndToHavokBehavior()
    else:
        pass
    """State 2"""
    DebugEvent('汎用ダイアログ判定')
    if IsGenericDialogOpen() == 1:
        """State 3"""
        ForceCloseGenericDialog()
    else:
        pass
    """State 4"""
    DebugEvent('メニュー判定')
    if (CheckSpecificPersonMenuIsOpen(z1, 0) == 1 or CheckSpecificPersonMenuIsOpen(z2, 0) == 1 or CheckSpecificPersonMenuIsOpen(z3,
        0) == 1 or CheckSpecificPersonMenuIsOpen(z4, 0) == 1):
        """State 5"""
        ForceCloseMenu()
    else:
        pass
    """State 8"""
    return 0

def t290112_x8(flag3=290, flag4=2):
    """State 0,1"""
    SetEventState(flag3 * 10000 + 70000200 + flag4 * 1, 1)
    def WhilePaused():
        c1_73(1)
    """State 2"""
    return 0

